import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import HeaderPage from "./header";

const LoginComp = () => {
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    localStorage.removeItem("token"); // מוחק את ה-token בכל טעינה של האפליקציה
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/personalArea");
    }
  }, [navigate]);
  

  const onSubmit = async (data:any) => {
    setLoginError("");
    setLoading(true);
    try {
      const response = await axios.post("https://localhost:7245/api/Auth", {
        userName: data.userName,
        password: data.password
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.userName);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("role", response.data.role);
        navigate("/personalArea", { state: response.data });
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
    <>
      <img src="../src/images/gray.jpg" className="backgroundAboutUs" alt="hospital img" />
      <HeaderPage />
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
            <Controller
              name="userName"
              control={control}
              defaultValue=""
              rules={{ required: "User name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="User Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.userName}
                  helperText={errors.userName?.message?.toString() || ""}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
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

            {loginError && (
              <Typography color="error" variant="body2" align="center" gutterBottom>
                {loginError}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Login"}
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default LoginComp;
