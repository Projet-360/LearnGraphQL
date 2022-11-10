const tab = [
    {
        headerValue: "Nom du client", 
        dataKey: "name"
    },
    {
        headerValue: "Adresse du client", 
        dataKey: "address"
    },
    {
        headerValue: "Responsable", 
        dataKey: "manager",
        personalizedCell: (data) => {
            return (
                <div>{`${data.manager.firstName} ${data.manager.lastName}`}</div>    
            )
        }
    },
    {
        headerValue: "Nombre de sites", 
        dataKey: "nbSites"
    },
    {
        headerValue: "Nombre d'interventions", 
        dataKey: "nbInterventions"
    }
]

export default tab
