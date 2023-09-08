import { User } from 'src/shared/models/user';

export const mapUser = (prevUser: User, user: User): User => {
	return {
		id: user.id,
		name: user.name,
		isAdmin: isUserAdmin(user),
		isLogin: prevUser.isLogin,
		email: user.email,
		role: user.role,
	};
};

const isUserAdmin = (user: User): boolean => {
	return user.role === 'admin';
};
