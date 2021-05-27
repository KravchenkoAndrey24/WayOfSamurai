import React, { ChangeEvent, useEffect, useState } from 'react';


type ProfileStatusType = {
	status: string
	updateUserStatusThunk: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {

	const [editMode, setEditMode] = useState<boolean>(false)
	const [localStatus, setLocalStatus] = useState<string>(props.status)

	useEffect(() => {
		setLocalStatus(props.status)
	}, [props.status])

	const activateEditMode = () => { setEditMode(true) }
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateUserStatusThunk(localStatus)
	}
	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLocalStatus(e.currentTarget.value)
	}



	return (
		<>
			{ !editMode &&
				<div>
					<span onDoubleClick={activateEditMode}>{props.status || '-----'} </span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} type="text" autoFocus onBlur={deactivateEditMode} value={localStatus} />
				</div>
			}
		</>
	)
}

export default ProfileStatusWithHooks;