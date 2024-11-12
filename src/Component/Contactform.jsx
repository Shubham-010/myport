import { Grid } from "@material-ui/core";

export default function ContactForm(){
    return(
        <Grid container style={{margin:'5px'}}>
        <Grid style={{justifyContent:'center'}}>
        <form>
            <label>Name :- </label>
            <input></input><br/>
            <label>Email :- </label>
                <input></input><br />
            <label>Mobile No. :- </label>
                <input></input><br />
            <label>Note :- </label>
                <textarea></textarea><br />
                <button>Submit</button>
            <button>Clear</button>
        </form>
            </Grid>
        </Grid>
    )
}