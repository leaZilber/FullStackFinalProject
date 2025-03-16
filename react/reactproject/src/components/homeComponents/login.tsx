import { useState } from "react";
import { TextField, Button, Container, Typography, Box, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const LoginComp = () => {
  const [loginError, setLoginError] = useState("");  // State for error message
  const [loading, setLoading] = useState(false);     // State for loading
  const { control, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = async (data: any) => {
    setLoginError(""); // Reset error
    setLoading(true);  // Start loading
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {//להכניס api נכון
        ID: data?.id,
        Password: data?.password
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        console.log("Login successfully", response.data);
      } else {
        setLoginError("Invalid login credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login failed", error);
      setLoginError("Login failed. Please check your credentials and try again.");
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
          Login
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          {/* תעודת זהות */}
          <Controller
            name="id"
            control={control}
            defaultValue=""
            rules={{
              required: "ID is required",
              pattern: {
                value: /^[0-9]{9}$/,
                message: "ID must be exactly 9 digits"
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="ID"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.id}
                helperText={errors.id ? errors.id.message?.toString() : ""}
              />
            )}
          />

          {/* סיסמה */}
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

          {/* שגיאת התחברות */}
          {loginError && (
            <Typography color="error" variant="body2" align="center" gutterBottom>
              {loginError}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            disabled={loading}  // Disable button while loading
          >
            {loading ? <CircularProgress size={24} /> : "Login"} {/* Show loading spinner */}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginComp;
