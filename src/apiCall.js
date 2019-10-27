const apiCall = async (info) => {
     console.log(info)
    try {
        const response = await fetch('https://us-central1-enye-fireside.cloudfunctions.net/api/', {
            method: 'POST',
            body: JSON.stringify(info)
        });
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        
    }
}

export default apiCall