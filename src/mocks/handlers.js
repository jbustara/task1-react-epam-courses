import { rest } from 'msw';
import { mockAdmin, mockCourses } from './data-test.mock';

export const handlers = [
	rest.post('http://localhost:4000/courses/add', async (req, res, ctx) => {
		const { title, description, duration, authors } = await req.json();
		const token = req.headers.get('Authorization');
		if (token !== mockAdmin.token) {
			return res(
				ctx.status(401),
				ctx.json({
					successful: false,
				})
			);
		}
		return res(
			ctx.status(201),
			ctx.json({
				successful: true,
				result: {
					title: title,
					description,
					duration,
					authors,
					creationDate: new Date(),
					id: `test-id-course-${Math.random()}`,
				},
			})
		);
	}),
	rest.get('http://localhost:4000/courses/all', async (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				successful: true,
				result: mockCourses,
			})
		);
	}),
];
