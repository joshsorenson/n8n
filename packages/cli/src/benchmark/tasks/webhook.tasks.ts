import axios from 'axios';
import { task, beforeEach } from '../main.js';

const client = axios.create({
	baseURL: 'http://localhost:5678/',
});

beforeEach(async () => {
	await client.post('/rest/login', {
		email: 'test@test.com',
		password: 'password',
	});
});

task(
	'1.1. Production workflow with authless webhook node with "Respond immediately" mode',
	async () => {
		await client.get('/webhook/d58b0160-2370-417b-bc0e-f3050b0c7adf');
	},
);

task('[first] Task 2 should do something else', async () => {
	console.log('[first] Task 2 executed');
});