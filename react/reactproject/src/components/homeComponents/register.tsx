import axios from 'axios';
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, CircularProgress } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import HeaderPage from './header';

const RegisterComp = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState(''); // Added success state
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        setRegisterError('');
        setRegisterSuccess('');
        setLoading(true);
        console.log(data);
        try {
            const response = await axios.post("https://localhost:7245/api/User", {
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
                setRegisterSuccess("נרשמת בהצלחה!"); // Success message
            } else {
                throw new Error("Registration failed");
            }
        } catch (error) {
            console.error("register failed", error);
            setRegisterError("הרשמה נכשלה. נסה שוב.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <HeaderPage/>
        <img src="../src/images/gray.jpg" className="backgroundAboutUs" alt="hospital img" />

        <Container maxWidth="xs" > 
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" gutterBottom color="primary">
                    הרשמה
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>

                    {/* UserName */}
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: "שם הוא שדה חובה" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="שם"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.name}
                                helperText={errors.name?.message?.toString() || ""}
                                sx={{ backgroundColor: '#ffffff' }} // White background for the input fields
                            />
                        )}
                    />

                    {/* UserEmail */}
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "אימייל הוא שדה חובה",
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "כתובת אימייל לא תקינה"
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="אימייל"
                                type="email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.email}
                                helperText={errors.email?.message?.toString() || ""}
                                sx={{ backgroundColor: '#ffffff' }} // White background for the input fields
                            />
                        )}
                    />

                    {/* UserPassword */}
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "סיסמה היא שדה חובה",
                            minLength: {
                                value: 6,
                                message: "הסיסמה חייבת להיות לפחות 6 תווים"
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="סיסמה"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.password}
                                helperText={errors.password?.message?.toString() || ""}
                                sx={{ backgroundColor: '#ffffff' }} // White background for the input fields
                            />
                        )}
                    />

                    {/* UserRole */}
                    <Controller
                        name="role"
                        control={control}
                        defaultValue=""
                        rules={{ required: "תפקיד הוא שדה חובה" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="תפקיד"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.role}
                                helperText={errors.role?.message?.toString() || ""}
                                sx={{ backgroundColor: '#ffffff' }} // White background for the input fields
                            />
                        )}
                    />

                    {/* UserPhone */}
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "מספר טלפון הוא שדה חובה",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "מספר טלפון לא תקין"
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="טלפון"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.phone}
                                helperText={errors.phone?.message?.toString() || ""}
                                sx={{ backgroundColor: '#ffffff' }} // White background for the input fields
                            />
                        )}
                    />

                    {/* UserAddress */}
                    <Controller
                        name="address"
                        control={control}
                        defaultValue=""
                        rules={{ required: "כתובת היא שדה חובה" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="כתובת"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.address}
                                helperText={errors.address?.message?.toString() || ""}
                                sx={{ backgroundColor: '#ffffff' }} // White background for the input fields
                            />
                        )}
                    />

                    {/* UserBirth */}
                    <Controller
                        name="birthDate"
                        control={control}
                        defaultValue=""
                        rules={{ required: "תאריך לידה הוא שדה חובה" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="תאריך לידה"
                                type="date"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                error={!!errors.birthDate}
                                helperText={errors.birthDate?.message?.toString() || ""}
                                sx={{ backgroundColor: '#ffffff' }} // White background for the input fields
                            />
                        )}
                    />

                    {registerError && (
                        <Typography color="error" variant="body2" align="center" gutterBottom>
                            {registerError}
                        </Typography>
                    )}

                    {registerSuccess && (
                        <Typography color="primary" variant="body2" align="center" gutterBottom>
                            {registerSuccess} {/* Success message */}
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
                        {loading ? <CircularProgress size={24} /> : "הירשם"}
                    </Button>
                </form>
            </Box>
        </Container>
        </>
    );
};

export default RegisterComp;
