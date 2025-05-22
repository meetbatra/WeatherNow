import  Card  from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoCard.css'

export default function InfoCard({heading, value}){
    return(
        <div className="InfoCard">
            <Card sx={{ backgroundColor: 'rgba(255,255,255,0.6)', boxShadow: 3 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {heading}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {value}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}