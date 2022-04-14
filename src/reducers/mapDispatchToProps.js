const mapDispatchToProps = (dispatch, props) => {
    return {
        ...props,
		kurseLaden: ele => {
			dispatch( { type: "READ_KURSE", item: ele } )
		},
        loeschenKurs: index => {
            dispatch( { type: "DELETE_KURS", index: index } )
        },
        addKurs: ele => {
			dispatch( { type: "ADD_KURSE", item: ele } )
		},
        editKurs: ele => {
			dispatch( { type: "EDIT_KURS", item: ele } )
		}
    }
}

export default mapDispatchToProps