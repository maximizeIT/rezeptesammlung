// import react stuff
import {useState, useEffect, useCallback, Fragment} from 'react';
// import { cloneElement } from 'react';

// import Material UI components
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import Autocomplete, {autocompleteClasses} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Toolbar from '@mui/material/Toolbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {styled} from '@mui/material/styles';

// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Divider from '@mui/material/Divider';

// icons
import CelebrationIcon from '@mui/icons-material/Celebration';
import BlenderIcon from '@mui/icons-material/Blender';
import ReportIcon from '@mui/icons-material/Report';
// import NumbersIcon from '@mui/icons-material/Numbers';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

// helpers
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import {matchSorter} from 'match-sorter';
import InfiniteScroll from 'react-infinite-scroll-component';

// import components
import ScrollTop from './ScrollTop';
import Recipe from './Recipe';
import Footer from './Footer';

// import recipes
import RECIPES from './data/recipes';

// alternative to HideOnScroll
// function ElevationScroll(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return cloneElement(children, {
//     elevation: trigger ? 8 : 0,
//   });
// }

// helper function for demo purposes
// function sleep(delay = 0) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// }

// hide app bar / header on scroll
function HideAppbarOnScroll(props) {
	const {children} = props;
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

const StyledAutocompletePopper = styled('div')(({theme}) => ({
	[`& .${autocompleteClasses.groupLabel}`]: {
		background: theme.palette.secondary.main,
		color: '#fff',
	},
	[`& .${autocompleteClasses.listbox}`]: {
		padding: 0,
		margin: 0,
		[`& .${autocompleteClasses.option}`]: {
			paddingLeft: 15,
			borderBottom: `1px solid  ${theme.palette.secondary.main}`,
		},
	},
}));

function StyledListBoxPopperComponent(props) {
	const {disablePortal, anchorEl, openPopper, ...other} = props;
	return <StyledAutocompletePopper {...other} />;
}

function App(props) {
	const [selectedRecipe, setSelectedRecipe] = useState(null);
	const [isRecipeSelected, setIsRecipeSelected] = useState(false);

	const [chunkedRecipes, setChunkedRecipes] = useState(null);
	const [allRecipes, setAllRecipes] = useState(null);
	const [letters, setLetters] = useState(null);
	const [chunk, setChunk] = useState(3);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const [view, setView] = useState('list');

	const [showAll, setShowAll] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	const triggerSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
	const triggerMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

	const [openPopper, setOpenPopper] = useState(false);

	const filterOptions = (data, {inputValue}) =>
		matchSorter(data, inputValue, {
			keys: ['recipe_title', 'recipe_content'],
			threshold: matchSorter.rankings.CONTAINS,
		});

	const loadRecipes = async () => {
		try {
			// await sleep(4000); // For demo purposes.

			const recipesNew = RECIPES.map((recipe) => {
				const first_letter = recipe.recipe_title[0].toUpperCase();
				return {
					first_letter: /[0-9]/.test(first_letter) ? '0-9' : first_letter,
					...recipe,
				};
			});

			const recipesSorted = recipesNew.sort(
				(a, b) => -b.first_letter.localeCompare(a.first_letter),
			);

			const letters = recipesSorted.reduce((accumulator, currentValue) => {
				const length = accumulator.length;
				if (
					length === 0 ||
					accumulator[length - 1] !== currentValue.first_letter
				) {
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

	const setRecipe = (recipe) => {
		setLoading(true);
		setSelectedRecipe(recipe);
		setIsRecipeSelected(true);
		setView('list');
		setShowAll(false);
		setHasMore(false);
		setOpenPopper(false);
	};

	const loadMore = () => {
		setChunk((chunk) => chunk + 3);
		if (chunk >= allRecipes.length) {
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
		setAllRecipes(null);
		setOpenPopper(false);
	};

	const handleIsRecipeSelectedDelete = () => {
		resetSearchFilterView();
	};

	// const handleViewToggleChange = (event, nextView) => {
	//     setLoading(true);
	//     if (nextView.length) {
	//         setView(nextView);
	//     }
	// };

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
		<Container maxWidth='lg'>
			<HideAppbarOnScroll {...props}>
				<AppBar
					color={error ? 'error' : 'primary'}
					sx={{height: openPopper ? '100%' : 'inherit'}}
				>
					<Toolbar>
						{!error ? (
							<Grid container spacing={2} sx={{py: 2}}>
								<Grid item xs={12} sm={12} md={3}>
									<Box sx={{py: 1}}>
										<Typography
											align={triggerSm ? 'left' : 'center'}
											variant='h6'
											component='h6'
											sx={{flexGrow: 1, ml: 1}}
										>
											Rezeptesammlung
										</Typography>
									</Box>
								</Grid>

								<Grid
									item
									xs={12}
									sm={9}
									md={6}
									container
									alignItems={'center'}
								>
									<Autocomplete
										PopperComponent={StyledListBoxPopperComponent}
										loading={loading}
										fullWidth
										clearOnEscape
										options={allRecipes ? allRecipes : ['']}
										filterOptions={filterOptions}
										noOptionsText='Keine Rezepte gefunden :('
										groupBy={(option) => option.first_letter}
										getOptionLabel={(option) => option.recipe_title}
										isOptionEqualToValue={(option, value) =>
											option.recipe_title === value.recipe_title
										}
										value={selectedRecipe}
										onChange={(_event, newRecipe) => {
											if (newRecipe) {
												setRecipe(newRecipe);
											} else {
												resetSearchFilterView();
											}
										}}
										renderInput={(params) => (
											<TextField
												{...params}
												label='Suche nach Rezepten...'
												variant='outlined'
												color='secondary'
												InputProps={{
													...params.InputProps,
													endAdornment: (
														<Fragment>
															{loading ? (
																<CircularProgress color='inherit' size={20} />
															) : null}
															{params.InputProps.endAdornment}
														</Fragment>
													),
												}}
											/>
										)}
										renderOption={(props, option, {inputValue}) => {
											const matches = match(option.recipe_title, inputValue);
											const parts = parse(option.recipe_title, matches);

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
								</Grid>

								<Grid
									item
									xs={12}
									sm={3}
									md={3}
									container
									justifyContent={triggerSm ? 'right' : 'center'}
									alignItems={triggerSm ? 'right' : 'center'}
								>
									<Stack
										direction='row'
										spacing={2}
										//  divider={<Divider orientation="vertical" flexItem />}
									>
										<Box sx={{py: 1}}>
											<Tooltip title='Random'>
												<IconButton
													aria-label='random'
													onClick={handleClickRandom}
												>
													<BlenderIcon color='secondary' />
												</IconButton>
											</Tooltip>
										</Box>

										{!isRecipeSelected && (
											<Box sx={{py: 1, paddingTop: 1.5}}>
												<Chip
													color='secondary'
													label={`${
														allRecipes ? allRecipes.length : '0'
													} Rezepte`}
												/>
											</Box>
										)}

										{isRecipeSelected && (
											<Box sx={{py: 1, paddingTop: 1.5}}>
												<Chip
													color='error'
													label='Reset'
													onDelete={handleIsRecipeSelectedDelete}
												/>
											</Box>
										)}
									</Stack>
								</Grid>
							</Grid>
						) : (
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='error'
								sx={{mr: 2}}
							>
								<ReportIcon />
								<Typography
									variant='h6'
									component='div'
									sx={{flexGrow: 1, ml: 1}}
								>
									Ups...
								</Typography>
							</IconButton>
						)}
					</Toolbar>
				</AppBar>
			</HideAppbarOnScroll>

			<Box component='main' sx={{mt: !triggerSm ? 30 : triggerMd ? 14 : 22}}>
				<Box>
					{error ? (
						<Alert variant='filled' severity='error'>
							<AlertTitle>Fehler</AlertTitle>
							Etwas ist schiefgelaufen... Fehlermeldung:{' '}
							<strong>{error}</strong>
						</Alert>
					) : (
						<Box>
							<Toolbar
								id='back-to-top-anchor'
								sx={{
									minHeight: '0px !important',
									width: '0px !important',
									height: '0px !important',
									margin: '0px !important',
									padding: '0px !important',
								}}
							/>

							{/* <Box>
                        
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >

                                {triggerSm &&
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
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
                                    </Grid>
                                }

                                { !isRecipeSelected && 
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{ py: 3 }}
                                    >
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
                                    </Grid>
                                }

                            </Grid>
                        </Box> */}

							{loading ? (
								<Backdrop
									sx={{
										color: '#fff',
										zIndex: (theme) => theme.zIndex.drawer + 1,
									}}
									open={true}
								>
									<CircularProgress color='inherit' />
								</Backdrop>
							) : (
								<InfiniteScroll
									dataLength={chunkedRecipes.length}
									next={loadMore}
									hasMore={hasMore}
									loader={
										!isRecipeSelected &&
										hasMore && (
											<Typography align='center' sx={{py: 3}}>
												<CircularProgress color='inherit' />
											</Typography>
										)
									}
									endMessage={
										!isRecipeSelected &&
										!hasMore && (
											<Typography variant='h5' align='center' sx={{py: 3}}>
												Alles hat mal ein Ende! <CelebrationIcon />
											</Typography>
										)
									}
									style={{padding: '10px'}}
								>
									{view === 'masonry' ? (
										<Masonry
											columns={{xs: 1, sm: 2, lg: 3}}
											spacing={2}
											sx={{paddingTop: '8px'}}
										>
											{!isRecipeSelected || showAll ? (
												chunkedRecipes.map((recipe, index) => (
													<Recipe
														key={index}
														view={view}
														recipeData={recipe}
														onClick={handleRecipeClick}
													/>
												))
											) : (
												<Recipe
													recipeData={selectedRecipe}
													view={view}
													onClick={handleRecipeClick}
													onClickClose={handleRecipeCloseClick}
													singleView={true}
												/>
											)}
										</Masonry>
									) : (
										<List
											sx={{width: '100%'}}
											subheader={<li style={{background: 'none'}} />}
										>
											{!isRecipeSelected || showAll ? (
												<Box>
													{letters.map(
														(sectionId) =>
															chunkedRecipes.find(
																(recipe) => recipe.first_letter === sectionId,
															) && (
																<li key={`section-${sectionId}`}>
																	<ul
																		style={{
																			paddingLeft: '0px',
																			paddingTop:
																				sectionId !== 'A' ? '20px' : 'auto',
																		}}
																	>
																		<ListSubheader sx={{background: 'none'}}>
																			<Typography
																				variant='h4'
																				color={'secondary'}
																			>
																				{sectionId}
																			</Typography>
																		</ListSubheader>

																		{chunkedRecipes.map(
																			(recipe, index) =>
																				recipe.first_letter === sectionId && (
																					<ListItem disableGutters key={index}>
																						<Recipe
																							key={`item-${sectionId}-${index}`}
																							recipeData={recipe}
																							view={view}
																							onClick={handleRecipeClick}
																						/>
																					</ListItem>
																				),
																		)}
																	</ul>
																</li>
															),
													)}
												</Box>
											) : (
												<ListItem disableGutters>
													<Recipe
														recipeData={selectedRecipe}
														view={view}
														onClick={handleRecipeClick}
														onClickClose={handleRecipeCloseClick}
														singleView={true}
													/>
												</ListItem>
											)}
										</List>
									)}
								</InfiniteScroll>
							)}

							<ScrollTop />
						</Box>
					)}
				</Box>
			</Box>

			<Footer />
		</Container>
	);
}

export default App;
