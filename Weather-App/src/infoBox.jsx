import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function InfoBox({ info }) {
  const img_url =
    "https://images.unsplash.com/photo-1628539783073-82f01150d946?w=600&auto=format&fit=crop&q=60";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",   // moved upward slightly
        padding: "20px",
      }}
    >
      <Card
        elevation={10}
        sx={{
          width: 380,
          borderRadius: "20px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardMedia
          sx={{ height: 150 }}
          image={img_url}
        />

        <CardContent sx={{ padding: "20px 24px" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "15px",
              color: "#1d1d1d",
            }}
          >
            {info.city}
          </Typography>

          {/* Weather Details */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              rowGap: "10px",
              columnGap: "10px",
              fontSize: "15px",
              color: "#333",
            }}
          >
            <Typography>🌡 Temp: {info.temp}°C</Typography>
            <Typography>💧 Humidity: {info.humidity}%</Typography>
            <Typography>⬇ Min: {info.tempMin}°C</Typography>
            <Typography>⬆ Max: {info.tempMax}°C</Typography>
          </Box>

          <Typography
            sx={{
              marginTop: "18px",
              fontWeight: 600,
              textAlign: "center",
              fontSize: "16px",
              color: "#2a2a2a",
            }}
          >
            ☁ Condition: "{info.weather}"
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
