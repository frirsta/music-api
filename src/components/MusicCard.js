import React from 'react';
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import styles from '../App.module.css'

const MusicCard = ({image, title, artist, alt}) => {
  return (
    <div className={styles.MusicCardContainer}>
            <Card
            className={styles.MusicCard}
              variant="outlined"
              orientation="horizontal"
              sx={{
                width: 320,
                gap: 2,
                "&:hover": {
                  boxShadow: "md",
                  borderColor: "neutral.outlinedHoverBorder",
                },
              }}
            >
              <AspectRatio  className={styles.MusicCardImage} ratio="1" sx={{ width: 90 }}>
                <img
                  src={image}
                  alt={alt}
                  height={150}
                  width={150}
                />
              </AspectRatio>

              <Typography
                level="h2"
                fontSize="lg"
                id="card-description"
                mb={0.5}
                className={styles.MusicCardDescription}
              >
                <p>{title}</p>
                <Link
                  className={styles.Artist}
                  overlay
                  underline="none"
                  href="#interactive-card"
                  sx={{ color: "text.tertiary" }}
                >
                  {artist}
                </Link>
              </Typography>
            </Card>
    </div>
  )
}

export default MusicCard
