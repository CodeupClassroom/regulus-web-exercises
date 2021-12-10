"use strict";

(() => {

    const userLastCommit = (user) => {
        return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                for (let event of data) {
                    if (event.type === "PushEvent") {
                        console.log(new Date(event.created_at));
                        break;
                    }
                }
            });
    }

    userLastCommit("davidandstephens");
    userLastCommit("jayarredondo");

    //

    // const wait = ms => new Promise(resolve => {
    //     setTimeout(resolve, ms);
    // });

    // let setTime;
    // const wait = (time) => {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             setTime = time;
    //             resolve();
    //         }, time);
    //     });
    // }
    //
    // wait(1000).then(() => console.log("Your promise resolved after 1 second!"));
    // wait(3000).then(() => console.log("Your promise resolved after 3 seconds!"));

    const wait = ms => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`You'll see this after ${ms/1000} second(s).`);
            }, ms);
        })
    }

    wait(1000).then(message => console.log(message));
    wait(3000).then(message => console.log(message));
    wait(5000).then(message => console.log(message));

})();