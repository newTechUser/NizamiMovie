import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box, CardContent } from "@mui/material";

interface CardContent {
    id: number;
    title: string;
    releaseYear: string;
    minAge: string;
    pic: string;
    lang: string[];
}

const MediaCard = (props: CardContent) => {
    const { id, title, releaseYear, minAge, lang, pic } = props;

    return (
        <>
            <Card
                key={id}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    backgroundImage: `url(${pic})`,
                    backgroundSize: "cover",
                    width: "309px",
                    height: "450px",
                    borderRadius: "17px",
                }}
            >
                <CardContent>
                    <Typography color='white' fontSize={22} fontWeight={600}>
                        {title}
                    </Typography>
                    <Typography color='white'>{releaseYear}</Typography>
                    <Typography color='white'>{minAge}</Typography>
                    <Box display='flex' columnGap='6px'>
                        {lang.map((lang, index) => (
                            <Typography color='white' bgcolor='rgba(255, 255, 255, 0.15)' borderRadius='5px' padding='4px 10px 4px 10px' key={index}>
                                {lang}
                            </Typography>
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default MediaCard;
