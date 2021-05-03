import React, { ChangeEvent, RefObject } from 'react';


type ProfileStatusType = {
	status: string
	updateUserStatusThunk: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {


	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateUserStatusThunk(this.state.status);
	}
	onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	render() {
		return (
			<>
				{!this.state.editMode &&
					<div>
						<span onDoubleClick={() => this.activateEditMode()}>{this.props.status || '-----'}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input onChange={this.onStatusChange} type="text" autoFocus onBlur={() => this.deactivateEditMode()} value={this.state.status} />
					</div>
				}
			</>

		)
	}
}

export default ProfileStatus;