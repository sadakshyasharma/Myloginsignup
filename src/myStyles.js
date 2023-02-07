import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    pageHeader: {
      display: "flex",
      alignItems: "center",
      flexFlow: "row wrap",
      marginBottom: "1rem",
    },
    heading: {
      flexGrow: 1,
      fontSize: 36,
      fontWeight: "bold",
      color: theme.palette.primary.main,

      [theme.breakpoints.down("md")]: {
        fontSize: 30,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 26,
      },
    },
    form: {
      display: "flex",
      flexFlow: "column nowrap",
      gap: theme.spacing(2),
    },
    field: {
      maxWidth: 500,
    },
    ruleList: {
      padding: 0,
      listStyleType: "none",
      "& li": {
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
        gap: theme.spacing(1),
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
      },
    },
    ruleIcon: {
      fontSize: 21,
    },
    ruleSuccess: {
      color: theme.palette.success.main,
    },
    ruleFail: {
      color: theme.palette.error.main,
    },
    submitContainer: {
      position: "relative",
      "& > .loadingIcon": {
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: "-12px",
        marginTop: "-12px",
      },
    },
    section: {
      [theme.breakpoints.between("md", "xl")]: {
        marginLeft: "30%",
        marginTop: "3%",
      },
    },
    submitButton: {
      width: "100%",
      [theme.breakpoints.between("sm", "lg")]: {
        width: "48%",
      },
      [theme.breakpoints.only("xl")]: {
        width: "40%",
      },
    },
    alert: {
      width: "48%",
      [theme.breakpoints.between("xs", "sm")]: {
        width: "92%",
      },
      marginBottom: 20,
    },
  })
);
export default useStyles;
