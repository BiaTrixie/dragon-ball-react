import type { Characters } from "../model/character";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from "@mui/material";

interface CharacterCardProps {
  characters: Characters[];
}

const CharacterCard = ({ characters }: CharacterCardProps) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {characters.map((character) => (
                <Card key={character.id} sx={{ minWidth: 345, maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={character.image}
                            alt={character.name}
                            sx={{
                                objectFit: 'contain',
                                backgroundColor: 'black',
                                padding: '8px'
                            }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {character.name}
                            </Typography>
                            <Typography variant="body2" sx={{ 
                                color: 'text.secondary',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical'
                            }}>
                                {character.description.length > 300 
                                    ? `${character.description.substring(0, 300)}...` 
                                    : character.description}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                Raça: {character.race}
                            </Typography>
                            <Typography variant="body2">
                                Ki: {character.ki} / {character.maxKi}
                            </Typography>
                            <Typography variant="body2">
                                Afiliação: {character.affiliation}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
};

export default CharacterCard;