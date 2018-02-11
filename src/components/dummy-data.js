//questions that user needs to provide information for 
//hardcode 
const questionsList = [
  {
    title: `Party Date?`,
  },
  {
    title: `Party Time?`,
  },
  {
    title: `Party Date?`,
  },
  {
    title: `Party Time?`,
  },
  {
    title: `What would you like to name this party?`,
  },
  {
    title: `What kind of party are you having?`,
    subQuestions:{
      potluck:[  
        {
          title: `potluck, Will you be serving alcohol at this party?`,
        },
        {
          title: `potluck, Have you invited your guests?`,
        },
        {
          title: `potluck, Are you assigning dishes?`,
        },
        {
          title: `potluck, As the host it's up to you to 
                  provide drinks! Will you be 
                  sering alcohol to your guests?`,
        },
        {
          title: `potluck, Have you invited your guests?`,
        }
      ],
      dinnerParty: [  
        {
        title: `dinnerParty, Plan the menu! 
                a starter is provided below`,
        },
        {
          title: `dinnerParty, Will you be serving alcohol at this party?`,
        },
        {
          title: `dinnerParty, Do you have enough silverware/
          glassware for all your guests?`,
        },
        {
          title: `dinnerParty, Have you invited your guests?`
        }
      ],
      cocktail:[  
        {
          title: `cocktail, Will you be serving alcohol at this party?`,
        },
        {
          title: `cocktail, Have you invited your guests?`,
        },
        {
          title: `cocktail, Are you assigning dishes?`,
        },
        {
          title: `cocktail, As the host it's up to you to provide drinks! 
          Will you be sering alcohol to your guests?`,
        },
        {
          title: `cocktail, Have you invited your guests?`,
        }
      ],
    }},

  //potluck option 

  //questions to answer the day before the party
  {
    title: `Have you invited your guests?`,
  },
  {
    title: `If the area you're entertaining in tidy?`,
  },
  {
    title: `If the area you're entertaining in tidy?`,
  },
  {
    title: `Is your drink station  or bar stocked? `,
  },
  {
    title: `If you have a theme have you decorated? `,
  },
  {
    title: `Do you have all the ingredients you need to cook with? `,
  },
  {
    title: `6.	Have you started cooking, do as much
            cooking as you can the day before?`,
  },


]

export default questionsList