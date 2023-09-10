import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

import { useForm } from "react-hook-form";
import axios from "axios";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function NewFormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const apiUrl = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";
    const formData = new FormData();

    const { first_name, last_name, email, password, profile_pic } = data;

    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profile_pic", profile_pic[0]);

    axios.post(apiUrl, formData);
    //   .then((response) => {
    //     setApiResponse(response.data);
    //   })
    //   .catch((error) => {
    //     setApiError(error.message);
    //   });
  };

  return (
    <main>
      <Container maxWidth="sm">
        <h1>NewFormValidation</h1>
        <Typography className="mt-4" variant="h4" gutterBottom>
          Registration
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField label="First Name" fullWidth margin="normal" variant="outlined" {...register("first_name", { required: true, maxLength: 20 })} error={!!errors.first_name} helperText={errors.first_name && "First name is required"} />

                <TextField label="Last Name" fullWidth margin="normal" variant="outlined" {...register("last_name", { required: true, maxLength: 20 })} error={!!errors.last_name} helperText={errors.last_name && "Last name is required"} />

                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  })}
                  error={!!errors.email}
                  helperText={(errors.email && errors.email.type === "required" && "Email is required") || (errors.email && errors.email.type === "pattern" && "valid email is required")}
                />

                <TextField label="Password" fullWidth margin="normal" variant="outlined" {...register("password", { required: true, maxLength: 20, minLength: 8 })} error={!!errors.password} helperText={errors.password && "Password is required"} />

                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} href="#file-upload">
                  Upload a file
                  <VisuallyHiddenInput type="file" {...register("profile_pic")} />
                </Button>

                <Button variant="contained" color="primary" fullWidth size="large" type="submit" onClick={handleSubmit(onSubmit)} sx={{ marginTop: 2 }}>
                  Send Message
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
