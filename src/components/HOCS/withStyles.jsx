import { withStyles } from '@material-ui/core/styles';

const styles = {
  //NavigationBar styling
  navBar: {
    width: 375,
    position: "fixed",
    bottom: 0
  },

  // Search styling
  searchForm: {
    padding: '2px 4px',
  },
  searchInput: {
    flex: 1,
    padding: 8,
  },

  // 4 different stylings for chips
  chipOne: {
    backgroundColor: 'rgba(79, 183, 0, 0.65)',
    color: 'white',
    margin: 5,
  },
  chipTwo: {
    backgroundColor: 'rgba(108, 192, 24, 0.63)',
    color: 'white',
    margin: 5,
  },
  chipThree: {
    backgroundColor: 'rgba(11, 145, 1, 0.68)',
    color: 'white',
    margin: 5,
  },
  chipFour: {
    backgroundColor: 'rgba(74, 145, 20, 0.685)',
    color: 'white',
    margin: 5,
  },
  chipSection: {
    margin: 5,
  },

  // Home page
  homePageTitle: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    fontWeight: 600
  },
  weeklyTips: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weeklyTipsTitle: {
    color: '#84C984',
    margin: '10px',
    padding: '10px',
    fontWeight: 600,
  },
  showMoreBtn: {
    fontSize: '18px',
    width: '94%',
    backgroundColor: '#84C984',
    color: '#fff',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid rgb(100, 153, 100)',
    cursor: 'pointer',
  },
  btnLink: {
    color: 'white',
  },
  weeklyImg: {
    width: '150px',
    margin: '10px',
    borderRadius: '5px',
  },
  weeklyTitle: {
    float: 'left',
    marginLeft: '10px',
    marginTop: '-5px',
  },

  //InspirationScreen
  inspirationContainer:{
    textAlign: 'center',
    marginBottom: 70,    
  },
  lineStyle: {
    width: 375,
    marginLeft: -30,
    borderTop: '3px solid black'
  },
  inspirationContent: {
    width: '90%',
    marginTop: 15,
    textAlign: 'center'
  },
  media: {
    width: '100%',
    position: 'relative',
    height: 200,
  },
  overlay: {
    width: '50%',
    position: 'absolute',
    top: '20%',
    left: '25%',
    color: 'white',
    backgroundColor: 'grey',
    opacity: '.8',
  },
  
  // Footer styling
  footerContainer: {
    backgroundColor: '#84C984', 
    color: 'black',
    height: '450px',
    marginTop: '30px',
  },
  footerWrapper:{
    width: '100%',
    bottom: 0,
  },
  footerh1: {
    color: 'black',
  },
  mdlLogo: {
    fontSize: '2em',
  }, 
  flexFoot: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  
  footerIcon: {
    padding: '10px',
    fontSize: '30px',
    cursor: 'pointer',
  },
  footerBold: {
    fontWeight: 'bold',
  },

  // Registration
  paper: {
    marginTop: '8ch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    backgroundColor: "#f44336",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '8ch',
  },
  submit: {
    marginTop: '6ch',
  },

  // Login styling
  logInContainer: {
    height: '100vh',
    backgroundImage: `url(${'https://annabanana.co/wp-content/uploads/2017/07/Food-Photography-Tips-4.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '700px',
  },
  logInCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logInAvatar: {
    backgroundColor: '#84C984',
    marginTop: '70px',
    margin: '10px',
  },
  logInForm: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '20px',
    backgroundColor: 'rgba(192,192,192,0.8)',
    padding: '20px',
    borderRadius: '5px',
  },
  LogInTitle: {
    fontSize: '25px',
    color: '#fff',
  },
  LogInFormInput: {
    backgroundColor: '#fff',
    opacity: 0.7,
    borderRadius: '4px',
  },
  logInSubmit: {
    margin: '10px 0 10px',
  },
  
  //Log out button
  logOutBtn: {
    width: '25%',
    fontSize: '12px',
    backgroundColor: 'rgba(218, 86, 86, 0.8)',
    color: '#fff',
    margin: '10px',
    borderRadius: '5px',
    border: '2px solid #da5656',
    cursor: 'pointer',
  },

  //Recipe screen
  recipeImg: {
    width: '100%',
  },
  recipeTitle: {
    width: '80%',
    position: 'absolute',
    top: '20%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'black',
    opacity: '.7',
    margin: '10px',
    padding: '5px',
    marginLeft: '.10px',
  },
  recipeHeaders: {
    backgroundColor: '#7fffd4',
    textTransform: 'uppercase',
  },
  recipeHeadPara: {
    position: 'absolute',
    marginLeft: '77%',
    marginTop: 20,
    fontWeight: 'bold',
  },
  stepList: {
    fontWeight: 'bold', 
    fontSize: 20,
  },
  stepListDiv: {
    width: '90%',
    textAlign: 'justify',
    marginLeft: -10,
    marginBottom: 100,
  },
  stepsListItem: {
    fontWeight: 'normal',
    fontSize: 16,
  },
  listItemMargin: {
    marginTop: 10,
  },
  ingredientsListItem: {
    listStyleType: 'square',
    fontSize: 16,
  },
  headerTitles: {
    margin: '10px',
    padding: '3px',
  },

  //Saved Recipes Screen
  cardImage: {
    width: '100px',
    height: 'auto',
    textAlign: 'center',
    margin: '15px',
  },
  savedRecipesDiv: {
    backgroundColor: '#84C98450',
    height: '100px',
  },
  savedRecipes: {
    width: '100px',
  },
  savedRecipesTitles: {
    float: 'right',
    marginTop: '-88px',
    marginRight: '145px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default withStyles(styles);