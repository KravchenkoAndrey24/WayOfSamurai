import React from 'react';

export const required = (value: any) => {
	if (value) {
		return undefined;
	}

	return 'Field is required';
}