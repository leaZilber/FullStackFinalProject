import axios from 'axios';
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, CircularProgress } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const RegisterComp= () => {
    const [registerError, setRegisterError] = useState('');
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        setRegisterError('');
        setLoading(true);
        console.log(data);
        try {
            const response = await axios.post("http://localhost:5131/api/User/register", {//להכניס api נכון
                UserName: data.name,
                UserEmail: data.email,
                UserEncryptedPassword: data.password,
                UserRole: data.role,
                UserPhone: data.phone,
                UserAddress: data.address,
                UserBirth: data.birthDate
            });

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.userId);
                console.log("register successfully", response.data);
            } else {
                throw new Error("Registration failed");
            }
        } catch (error) {
            console.error("register failed", error);
            setRegisterError("Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 3,
                    backgroundColor: "#f5f5f5",
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Register
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>

                    {/* UserName */}
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.name}
                                helperText={errors.name?.message?.toString() || ""}
                            />
                        )}
                    />

                    {/* UserEmail */}
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email address"
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.email}
                                helperText={errors.email?.message?.toString() || ""}
                            />
                        )}
                    />

                    {/* UserPassword */}
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.password}
                                helperText={errors.password?.message?.toString() || ""}
                            />
                        )}
                    />

                    {/* UserRole */}
                    <Controller
                        name="role"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Role is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Role"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.role}
                                helperText={errors.role?.message?.toString() || ""}
                            />
                        )}
                    />

                    {/* UserPhone */}
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Invalid phone number"
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Phone"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.phone}
                                helperText={errors.phone?.message?.toString() || ""}
                            />
                        )}
                    />

                    {/* UserAddress */}
                    <Controller
                        name="address"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Address is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.address}
                                helperText={errors.address?.message?.toString() || ""}
                            />
                        )}
                    />

                    {/* UserBirth */}
                    <Controller
                        name="birthDate"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Birth date is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Birth Date"
                                type="date"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                error={!!errors.birthDate}
                                helperText={errors.birthDate?.message?.toString() || ""}
                            />
                        )}
                    />

                    {registerError && (
                        <Typography color="error" variant="body2" align="center" gutterBottom>
                            {registerError}
                        </Typography>
                    )}

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: 2 }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : "Register"}
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default RegisterComp;
