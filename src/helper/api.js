let BACKEND_URL = process.env.REACT_APP_API_URL;

export const getUsers = async () => {
    return await fetch(`${BACKEND_URL}users`);

};

export const getProjects = async () => {
    return await fetch(`${BACKEND_URL}projects`);

};

export const getGateways = async () => {
    return await fetch(`${BACKEND_URL}gateways`);

};

export const getReport = async ({from = '2021-01-01', to = '2021-02-28'}) => {
    const options = {
        from: from,
        to: to
    }

    return fetch(`${BACKEND_URL}report`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(options)
    });

};
