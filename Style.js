import { StyleSheet,Dimensions } from "react-native";

const {width,height} = Dimensions.get('screen')


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4effa',
  },
  formContainer: {
    paddingTop: height * 0.04,
    justifyContent: 'center',
    width: '90%',
  },
  errorText: {
    color: 'red',
    fontSize: width * 0.04,
    paddingLeft: width * 0.05,
// paddingLeft:18,
    marginTop: height * 0.005,
    marginBottom: height * 0.005,
  },
  createContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  createText: {
    fontWeight: '900',
    fontSize: width * 0.037,
  },
  button: {
    width: width * 0.3,
    justifyContent: 'center',
  
    padding: 12,
    margin: height * 0.01,
    backgroundColor: '#532b88',
    borderRadius: width * 0.1,
    height: height * 0.09,
    alignSelf: 'center',
    marginTop: height * 0.06,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: height * 0.023,
   lineHeight: height * 0.05,
  },
  text: {
    alignSelf:'center',
    color: '#fff',
    fontSize: 16,
    marginVertical: height * 0.01,
    width: '90%',
    paddingLeft: 18,
    backgroundColor: '#c8b1e4',
    borderRadius: width * 0.04,
    height: height * 0.06,
  },
 passwordContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', // Center the input horizontally
  width: '90%', // Ensure the container takes up the right amount of space
  backgroundColor: '#c8b1e4',
  borderRadius: width * 0.04,
  height: height * 0.06,
  marginVertical: height * 0.01, 
  paddingHorizontal: 18,
  alignSelf: 'center', // Center the container within the parent view
},
passwordInput: {
  flex: 1,
  color: '#fff',
  height: '100%',
  textAlign: 'left', // Center the text within the input
},

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    marginLeft:width*0.5
  }
});
