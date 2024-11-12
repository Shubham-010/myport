import { Grid } from "@material-ui/core";

export default function LayoutButton(props){
    let newLayout = props.children.length < 5 ? true : false;
    return(
<Grid
    container
    item
    xs={12}
    style={{
        padding: "7px 0px",
        justifyContent: newLayout ? "center" : "space-evenly",
        gap: newLayout ? "3rem" : 0,
    }}
>
    {props.children}
</Grid>
    )
};