import { getAccessToken } from 'google'

/* global gapi */

const fetchTaskLists = async () => {
	let taskLists;
	const url = 'https://tasks.googleapis.com/tasks/v1/users/@me/lists';
	await fetch(url, {
		method: 'GET',
		headers: new Headers({ 'Authorization': 'Bearer ' + getAccessToken() })
	}).then((res) => {
		return res.json();
	}).then((taskListData) => {
		console.log(taskListData.items);
		taskLists = taskListData.items;
	});
	return taskLists;
}

const createBubbleList = async () => {
	const url = 'https://tasks.googleapis.com/tasks/v1/users/@me/lists';
	const bodyContent = JSON.stringify({ title: 'Bubble To Do' });
	await fetch(url, {
		method: 'POST',
		headers: new Headers({ 'Authorization': 'Bearer ' + getAccessToken() }),
		body: bodyContent
	});
}

const getBubbleList = async () => {
	const allTaskLists = await fetchTaskLists();
	for (const currentTaskList of allTaskLists) {
		if (currentTaskList.title === 'Bubble To Do') {
			console.log(currentTaskList);
			console.log(currentTaskList.id)
			return currentTaskList;
		}
	}
	await createBubbleList();
	getBubbleList();
}

const getBubbleListId = async () => {
	const bubbleList = await getBubbleList();
	return bubbleList.id;
}

const fetchBubbles = async () => {
	let bubbles;
	const url = 'https://tasks.googleapis.com/tasks/v1/lists/' + (await getBubbleListId()) + '/tasks';
	await fetch(url, {
		method: 'GET',
		headers: new Headers({ 'Authorization': 'Bearer ' + getAccessToken() })
	}).then((res) => {
		return res.json();
	}).then((bubbleData) => {
		console.log(bubbleData.items);
		bubbles = bubbleData.items;
	});
	return bubbles;
}

export const addBubble = async (bubbleTitle, bubbleNotes, bubbleDue) => {
	console.log(bubbleTitle, bubbleNotes, bubbleDue);
	const url = 'https://tasks.googleapis.com/tasks/v1/lists/' + (await getBubbleListId()) + '/tasks';
	const bodyContent = JSON.stringify({ title: bubbleTitle, notes: bubbleNotes, due: bubbleDue });
	console.log(bodyContent);
	await fetch(url, {
		method: 'POST',
		headers: new Headers({ 'Authorization': 'Bearer ' + getAccessToken() }),
		body: bodyContent
	});
}

const addBubbleTextOnly = async (bubbleTitle, bubbleNotes) => {
	console.log(bubbleTitle, bubbleNotes);
	const url = 'https://tasks.googleapis.com/tasks/v1/lists/' + (await getBubbleListId()) + '/tasks';
	const bodyContent = JSON.stringify({ title: bubbleTitle, notes: bubbleNotes });
	console.log(bodyContent);
	await fetch(url, {
		method: 'POST',
		headers: new Headers({ 'Authorization': 'Bearer ' + getAccessToken() }),
		body: bodyContent
	});
}

const popBubble = async (bubbleId) => {
	const url = 'https://tasks.googleapis.com/tasks/v1/lists/' + (await getBubbleListId()) + '/tasks/' + bubbleId;
	await fetch(url, {
		method: 'DELETE',
		headers: new Headers({ 'Authorizaion': 'Bearer ' + getAccessToken() })
	});
}
