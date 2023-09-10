// import { useState } from "react";
import { Container, Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function FormValidation() {
  //   const [apiResponse, setApiResponse] = useState(null);
  //   const [apiError, setApiError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const apiUrl = "https://tureappservar.onrender.com/user/";

    const UpData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
    };
    axios.post(apiUrl, UpData);
    //   .then((response) => {
    //     setApiResponse(response.data);
    //   })
    //   .catch((error) => {
    //     setApiError(error.message);
    //   });
  };

  return (
    <main>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Contact Form
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("name", { required: true, maxLength: 20 })} label="Your Name" fullWidth margin="normal" variant="outlined" error={!!errors.name} helperText={errors.name && "Name is required"} />
                <TextField {...register("phone", { required: true, maxLength: 20 })} label="Phone" fullWidth margin="normal" variant="outlined" error={!!errors.phone} helperText={errors.phone && "Phone is required"} />
                {/* <TextField
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  })}
                  label="Your Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email && "Email is required"}
                /> */}
                <TextField
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  })}
                  error={!!errors.email}
                  helperText={(errors.email && errors.email.type === "required" && "Email is required") || (errors.email && errors.email.type === "pattern" && "valid email is required")}
                  label="Your Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField {...register("city", { required: true })} label="City" fullWidth margin="normal" variant="outlined" multiline rows={4} error={!!errors.city} helperText={errors.city && "City is required"} />
                <Button variant="contained" color="primary" fullWidth size="large" type="submit" onClick={handleSubmit(onSubmit)} sx={{ marginTop: 2 }}>
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
