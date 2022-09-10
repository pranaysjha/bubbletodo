import { getAccessToken } from './google'


const fetchAllTaskLists = async () => {
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

export const getAllBubbleLists = async () => {
	let bubbleLists = [];
	const allTaskLists = await fetchAllTaskLists();
	for (const currentTaskList of allTaskLists) {
		const titleArr = currentTaskList.title.split(":");
		if (titleArr[0] === 'Bubble') {
			console.log(currentTaskList);
			currentTaskList.color = titleArr[1];
			bubbleLists.push(currentTaskList);
		}
	}
	console.log(bubbleLists);
	return bubbleLists;
}

const createBubbleList = async (bubbleColor) => {
	const url = 'https://tasks.googleapis.com/tasks/v1/users/@me/lists';
	const bodyContent = JSON.stringify({ title: 'Bubble:' + bubbleColor });
	await fetch(url, {
		method: 'POST',
		headers: new Headers({ 'Authorization': 'Bearer ' + getAccessToken() }),
		body: bodyContent
	});
	console.log('Created a new task list: ' + bubbleColor)
}

const getBubbleList = async (bubbleColor) => {
	console.log(bubbleColor);
	const allTaskLists = await fetchAllTaskLists();
	for (const currentTaskList of allTaskLists) {
		if (currentTaskList.title === 'Bubble:' + bubbleColor) {
			console.log(currentTaskList);
			console.log(currentTaskList.id);
			return currentTaskList;
		}
	}
	await createBubbleList(bubbleColor);
	return await getBubbleList(bubbleColor);
}

const getBubbleListId = async (bubbleColor) => {
	const bubbleList = await getBubbleList(bubbleColor);
	console.log(bubbleList);
	console.log(bubbleList.id);
	return bubbleList.id;
}

export const getBubblesFromList = async (id) => {
	let bubbles = [];
	const url = 'https://tasks.googleapis.com/tasks/v1/lists/' + (id) + '/tasks';
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

export const addBubbleToTasks = async (bubbleTitle, bubbleDate, bubbleColor) => {
	bubbleDate += 'T00:00:00.000Z'
	console.log(bubbleTitle, bubbleDate, bubbleColor);
	const url = 'https://tasks.googleapis.com/tasks/v1/lists/' + (await getBubbleListId(bubbleColor)) + '/tasks';
	console.log(url);
	const bodyContent = JSON.stringify({ title: bubbleTitle, due: bubbleDate });
	console.log(bodyContent);
	let bubble;
	await fetch(url, {
		method: 'POST',
		headers: new Headers({ 'Authorization': 'Bearer ' + getAccessToken() }),
		body: bodyContent
	}).then((res) => {
		return res.json();
	}).then((fetchedBubble) => {
		console.log(fetchedBubble.resource);
		bubble = fetchedBubble.resource;
	});
	return bubble;
}

/*const popBubble = async (bubbleId) => {
	const url = 'https://tasks.googleapis.com/tasks/v1/lists/' + (await getBubbleListId()) + '/tasks/' + bubbleId;
	await fetch(url, {
		method: 'DELETE',
		headers: new Headers({ 'Authorizaion': 'Bearer ' + getAccessToken() })
	});
}*/

export const fetchUserProfile = async () => {
	let profile;
	const url = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + getAccessToken();
	await fetch(url, {
		method: 'GET',
		headers: new Headers({ 'Authorization': 'Bearer ' + getAccessToken()})
	}).then((res) => {
		return res.json();
	}).then((userProfile) => {
		console.log(userProfile);
		profile = userProfile;
	});
	return profile;
}