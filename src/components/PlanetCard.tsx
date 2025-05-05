import type { Planet } from "../model/planet";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from "@mui/material";

interface PlanetCardProps {
  planets: Planet[];
}

const PlanetCard = ({ planets }: PlanetCardProps) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {planets.map((planet) => (
                <Card key={planet.id} sx={{ minWidth: 345, maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={planet.image}
                            alt={planet.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {planet.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {planet.description}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                Status: {planet.isDestroyed ? 'Destruído' : 'Existente'}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
};

export default PlanetCard;