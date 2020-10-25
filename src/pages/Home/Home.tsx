import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Button, Toolbar, Container, Grid, AppBar} from '@material-ui/core';
import {Product} from '../../components/Product/Product';







export const Home = () => {




    return (
        <div>

            <Container fixed>
                <Grid container spacing={1}>
                    <Grid item  xs={4} >
                        <Product  />
                    </Grid>
                    <Grid item  xs={4} >
                        <Product  />
                    </Grid>
                    <Grid item  xs={4} >
                        <Product  />
                    </Grid>
                    <Grid item  xs={4} >
                        <Product  />
                    </Grid>
                    <Grid item  xs={4} >
                        <Product  />
                    </Grid>
                    <Grid item  xs={4} >
                        <Product  />
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}
