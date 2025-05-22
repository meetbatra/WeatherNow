import Card  from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './Temperature.css'

export default function Temperature({temp, max, min}){
    return(
        <div className="Temperature">
            <Card sx={{ backgroundColor: 'rgba(255,255,255,0.6)', boxShadow: 3 }}>
                <CardContent style={{textAlign: 'center'}}>
                    <Typography variant="h5" component="div">
                    {temp}&deg;C
                    </Typography>
                    <Typography variant="body2">
                    <ArrowUpwardIcon sx={{fontSize: 15}} /> {max}&deg;C&nbsp;&nbsp;&nbsp;
                    <ArrowDownwardIcon sx={{fontSize: 15}} /> {min}&deg;C
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}