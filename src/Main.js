import { useState, useEffect, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Toolbar from '@mui/material/Toolbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import BlenderIcon from '@mui/icons-material/Blender';

// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';

// icons
import NumbersIcon from '@mui/icons-material/Numbers';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import CelebrationIcon from '@mui/icons-material/Celebration';

// helpers
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { matchSorter } from "match-sorter";
import InfiniteScroll from "react-infinite-scroll-component";

import ScrollTop from './ScrollTop';
import Recipe from './Recipe';
import POSTS from "./data/posts";

function Main() {

    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [isRecipeSelected, setIsRecipeSelected] = useState(false);
    
    const [chunkedRecipes, setChunkedRecipes] = useState(null); // TO-DO: set proper initial value => load posts
    const [allRecipes, setAllRecipes] = useState(null);
    const [letters, setLetters] = useState(null);
    const [chunk, setChunk] = useState(3);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const [view, setView] = useState('list');
    
    const [showAll, setShowAll] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const filterOptions = (data, { inputValue }) => matchSorter(data, inputValue, {keys: ['post_title', 'post_content'], threshold: matchSorter.rankings.CONTAINS});

    const loadRecipes = async () => {
        try {

            const recipesNew = POSTS.map((recipe) => {
                const first_letter = recipe.post_title[0].toUpperCase();
                return {
                    first_letter: /[0-9]/.test(first_letter) ? '0-9' : first_letter,
                    ...recipe,
                };
            });
        
            const recipesSorted = recipesNew.sort((a, b) => -b.first_letter.localeCompare(a.first_letter));

            const letters = recipesSorted.reduce((accumulator, currentValue) => {
                const length = accumulator.length;
                if (length === 0 || accumulator[length - 1] !== currentValue.first_letter) {
                    accumulator.push(currentValue.first_letter);
                }
                return accumulator;
            }, []);

            setAllRecipes(recipesSorted);
            setChunkedRecipes(recipesSorted.slice(0, chunk));
            setLetters(letters);

            setError('');
        } catch (error) {
            setError('Error while loading recipes. Try again later...');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadRecipes();
    });
    
    const loadMore = () => {
        setChunk((chunk) => chunk + 3);
        if(chunk >= allRecipes.length){
            setHasMore(false);
        }
    };

    const resetSearchFilterView = () => {
        setLoading(true);
        setSelectedRecipe(null);
        setIsRecipeSelected(false);
        setView('list');
        setShowAll(false);
        setHasMore(true);
        setChunk(3);
        setAllRecipes(null)
    };

    // const handleShowAllChange = (event) => {
    //     setLoading(true);
    //     if(event.target.checked) { // show all
    //         setChunkedRecipes(allRecipes);
    //         setChunk(allRecipes.length);
    //         setShowAll(true);
    //         setHasMore(false);
    //     } else { // reset
    //         setChunk(3);
    //         setShowAll(false);
    //         setHasMore(true);
    //     }
    // };

    const handleIsRecipeSelectedDelete = () => {
        resetSearchFilterView();
    };
    
    const handleViewToggleChange = (event, nextView) => {
        setLoading(true);
        if (nextView.length) {
            setView(nextView);
        }
    };

    const setRecipe = (recipe) => {
        setLoading(true);
        setSelectedRecipe(recipe);
        setIsRecipeSelected(true);
        setView('list');
        setShowAll(false);
        setHasMore(false);
    }

    const handleRecipeClick = useCallback((recipeData) => {
        setRecipe(recipeData);
        setIsRecipeSelected(true);
    }, []);

    const handleRecipeCloseClick = useCallback(() => {
        resetSearchFilterView();
    }, []);

    const handleClickRandom = () => {
        setRecipe(allRecipes[Math.floor(Math.random() * allRecipes.length)]);
    };

    return (
        <Box component="main">
            <Box>
                {error ?
                    <Alert variant="filled" severity="error">
                        <AlertTitle>Fehler</AlertTitle>
                        Etwas ist schiefgelaufen... Fehlermeldung: <strong>{error}</strong>
                    </Alert>
                    :
                    <Box>
                        <Toolbar id="back-to-top-anchor" sx={{ minHeight: '0px !important', width: '0px !important', height: '0px !important', margin: '0px !important', padding: '0px !important' }} />
                
                        <Box>

                            <Autocomplete
                                fullWidth
                                clearOnEscape
                                options={allRecipes ? allRecipes : ['']}
                                filterOptions={filterOptions}
                                
                                groupBy={(option) => option.first_letter}
                                getOptionLabel={(option) => option.post_title}
                                isOptionEqualToValue={(option, value) => option.post_title === value.post_title}
                                
                                value={selectedRecipe}
                                onChange={(_event, newRecipe) => {
                                    if(newRecipe){
                                        setRecipe(newRecipe);
                                    } else {
                                        resetSearchFilterView();
                                    }
                                }}

                                // onKeyDown={(event) => {
                                //     setIsLoading(true)
                                // }}

                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Suche nach Rezepten..."
                                        InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <Fragment>
                                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                                {params.InputProps.endAdornment}
                                            </Fragment>
                                        ),
                                        }}
                                    />
                                )}
                                
                                // renderOption={(props, option) => <li key={option.id} {...props}>{option.post_title}</li>}
                                
                                renderOption={(props, option, { inputValue }) => {
                                    const matches = match(option.post_title, inputValue);
                                    const parts = parse(option.post_title, matches);
                            
                                    return (
                                        <li {...props}>
                                            <div>
                                                {parts.map((part, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                    fontWeight: part.highlight ? 700 : 400,
                                                    }}
                                                >
                                                    {part.text}
                                                </span>
                                                ))}
                                            </div>
                                        </li>
                                    );
                                }}
                            />

                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ py: 2 }}
                            >

                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={2}
                                >

                                    <Box sx={{ py: 1 }}>
                                        <Tooltip title="Random">
                                            <IconButton aria-label="random" onClick={handleClickRandom}>
                                                <BlenderIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>

                                    { !isRecipeSelected && 
                                        <ToggleButtonGroup
                                            orientation="horizontal"
                                            value={view}
                                            exclusive
                                            onChange={handleViewToggleChange}
                                            color="primary"
                                        >
                                            <ToggleButton value="list" aria-label="list">
                                                <Tooltip title="Listenansicht">
                                                    <ViewListIcon />
                                                </Tooltip>
                                            </ToggleButton>
                                            <ToggleButton value="masonry" aria-label="masonry">
                                                <Tooltip title="Masonry-Ansicht">
                                                    <ViewQuiltIcon />
                                                </Tooltip>
                                            </ToggleButton>
                                        </ToggleButtonGroup>                                
                                    }

                                    {/* { !isRecipeSelected && 
                                        <Box sx={{ py: 1 }}>
                                            <FormControlLabel 
                                                label="Zeige alle Rezepte ⚠️"
                                                control={
                                                    <Switch
                                                        checked={showAll}
                                                        onChange={handleShowAllChange}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                    />
                                                }
                                            />
                                        </Box>
                                    } */}

                                    { isRecipeSelected && 
                                        <Box sx={{ py: 1 }}>
                                            <Chip color='error' label="Reset" onDelete={handleIsRecipeSelectedDelete} />
                                        </Box>
                                    }
                                </Stack>

                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    { !isRecipeSelected && 
                                        <Box sx={{ py: 2 }}>
                                            <Chip color='success' icon={<NumbersIcon />} label={`${ allRecipes ? allRecipes.length : '0'} Rezepte`}/>
                                        </Box>
                                    }
                                </Grid>
                            </Grid>
                        </Box>

                        {loading ?
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={true}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop> 
                            :
                            <InfiniteScroll
                                dataLength={chunkedRecipes.length}
                                next={loadMore}
                                hasMore={hasMore}
                                loader={
                                    !isRecipeSelected && hasMore && 
                                    <Typography align="center" sx={{ py: 3 }}>
                                        <CircularProgress color="inherit" />
                                    </Typography>}
                                endMessage={
                                    !isRecipeSelected && !hasMore && 
                                    <Typography variant='h5' align="center" sx={{ py: 3 }}>
                                        Alles hat mal ein Ende! <CelebrationIcon />
                                    </Typography>
                                }
                                style={{ padding: "10px" }}
                                >
                                { view === 'masonry' ? 
                                    <Masonry columns={{ xs: 1, sm: 2, lg: 3 }} spacing={2} sx={{ paddingTop: '8px' }}>
                                        { !isRecipeSelected || showAll ?
                                            chunkedRecipes.map((recipe, index) => (
                                                <Recipe key={index} view={view} recipeData={recipe} onClick={handleRecipeClick} />
                                            )) 
                                            : 
                                            <Recipe recipeData={selectedRecipe} view={view} onClick={handleRecipeClick} onClickClose={handleRecipeCloseClick} singleView={true} />
                                        }
                                    </Masonry>
                                    :
                                    <List sx={{ width: '100%' }} subheader={<li />}>
                                        { !isRecipeSelected || showAll ? 
                                            <Box>
                                                { letters.map((sectionId) => (
                                                    chunkedRecipes.find(recipe => recipe.first_letter === sectionId) &&
                                                    <li key={`section-${sectionId}`}>
                                                        <ul style={{ paddingLeft: '0px', paddingTop: sectionId !== 'A' ? '20px' : 'auto' }}>
                                                            <ListSubheader>
                                                                <Typography variant='h4'>
                                                                    {sectionId}
                                                                </Typography>
                                                            </ListSubheader>
                                                            
                                                            {chunkedRecipes.map((recipe, index) => (
                                                                recipe.first_letter === sectionId && 
                                                                <ListItem disableGutters key={index}>
                                                                    <Recipe key={`item-${sectionId}-${index}`} recipeData={recipe} view={view} onClick={handleRecipeClick} />
                                                                </ListItem>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </Box>
                                            :
                                            <ListItem disableGutters>
                                                <Recipe recipeData={selectedRecipe} view={view} onClick={handleRecipeClick} onClickClose={handleRecipeCloseClick} singleView={true}/>
                                            </ListItem>
                                        }
                                    </List>
                                }
                            </InfiniteScroll>
                        }
                        
                        <ScrollTop />
                    </Box>
                }
            </Box>
        </Box>
    );
}

export default Main;