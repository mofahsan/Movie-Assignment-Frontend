import {TextField,Paper,Checkbox,FormControlLabel,Button,Grid,CardActionArea,CardActions,Box,
Typography,CardContent,CardMedia,Card
} from "@mui/material"
import StarIcon from '@mui/icons-material/Star';

import axios from "axios"
import { useState ,useEffect } from "react"

import base_url from "../environment"
import swal from 'sweetalert';

export default function MoviesCard(){
    const starColor = {color:'yellow'}

    const [data, setdata] = useState([])

    const getMovies = () =>{
        axios.get(`${base_url}`).then(res => setdata(res?.data?.data)).catch(err => swal("OOPS","Server Request Failed","error"))
    }

        useEffect(() => {
            getMovies()
        }, [])
    
return (
    <>
  <Grid container spacing={3}>
  {
    data?.map((data)=>{
        return(
          <Grid item xs={12} sm={6} md={4} key={data.title } >   
            <Card key={data._id} style={{maxWidth: "100%" ,height:400}}>
              <CardActionArea>
                <CardMedia
                  style={{height: 240}}
                  image={`${base_url}/${data.image}`}
                  alt = {"Movie Poster"}
                />
                <CardContent>
                  <Typography align="center" gutterBottom variant="h5" component="h2">
                    {data.title}
                  </Typography>
                  
                  <Typography variant="body2" color="textSecondary" component="p">
                   Rating 
                     {[...Array(data.rating)].map((x, i) =>
                        <StarIcon key={i} sx={starColor}/>
                      )}
                    
                  </Typography>

                  <Typography variant="body2" color="textSecondary" component="p">
                   Release {data.releaseDate}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
         </Grid>
        )
    })
  }
</Grid>
  
  </>
 ) 

}
