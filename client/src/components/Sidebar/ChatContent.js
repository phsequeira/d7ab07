import React from "react";
import { Box, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  previewTextBold: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: -0.17,
  },
  otherUserImg: {
    alignSelf: 'center',
    right: '24px',
  }
}));

const ChatContent = ({ conversation }) => {
  const classes = useStyles();

  const { otherUser, notificationCount } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        {notificationCount > 0 ?  <Typography className={classes.previewTextBold}>
          {latestMessageText}
        </Typography> :  <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>}
      </Box>   
      {notificationCount > 0 && <Badge badgeContent={notificationCount} color="primary" className={classes.otherUserImg}>
</Badge>}
      </Box>
  );
};

export default ChatContent;
