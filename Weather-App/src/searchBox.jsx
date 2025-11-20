import { useState } from "react";
import {
  TextField,
  Card,
  InputAdornment,
  Typography,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "eb7d9cff703bedc7f01c20651bc2497b";

  const [city, setCity] = useState("");

  const getWeatherInfo = async () => {
    const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const json = await res.json();

    return {
      city: json.name,
      temp: json.main.temp,
      tempMin: json.main.temp_min,
      tempMax: json.main.temp_max,
      humidity: json.main.humidity,
      weather: json.weather[0].description,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = await getWeatherInfo();
    updateInfo(info);
    setCity("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px", // ⬅ moved up
        padding: "20px",
      }}
    >
      <Card
        elevation={8}
        sx={{
          padding: "22px", // ⬅ slightly smaller padding
          width: "380px", // ⬅ smaller width
          borderRadius: "18px",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography
          variant="h6" // ⬅ slightly smaller heading
          sx={{
            textAlign: "center",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Search Weather
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              label="City"
              size="small" // ⬅ smaller input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              InputProps={{
                sx: {
                  borderRadius: "12px",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#666" }} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                paddingX: 2.5,
                borderRadius: "12px",
                background: "linear-gradient(45deg, #2196f3, #21cbf3)",
                fontWeight: 600,
              }}
            >
              Go
            </Button>
          </Box>
        </form>
      </Card>
    </Box>
  );
}
