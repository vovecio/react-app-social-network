import DialogItems from "./DialogItems";
import {addMessageActionCreator, updateMessageTextCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (id, messageText) => {
            dispatch(addMessageActionCreator(id, messageText));
        },
        updateMessageText: (id, text) => {
            dispatch(updateMessageTextCreator(id, text));
        }
    }
}
const DialogItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems);

export default DialogItemsContainer;