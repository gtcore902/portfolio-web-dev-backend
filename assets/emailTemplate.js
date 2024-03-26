const emailTemplate = `
    <div style="text-align: center; background-color: #F2F1EF; padding: 35px 0; font-size: 18px;">
        <h1 style="color: #E94D35; font-size: 24px;">Nouveau message depuis portfolio gaetantremois</h1>
        <p>Nom : <br /> <span style="color: #E94D35;">{{inputName}}</span></p>
        <p>Email : <br /> <span style="color: #E94D35;">{{inputEmail}}</span></p>
        <p>Message : <br /> <span style="color: #E94D35;">{{inputMessage}}</span></p>
        <p>RGPD : <br /> <span style="color: #E94D35;">{{inputRgpd}}</span></p>
    </div>
`;
module.exports = emailTemplate;
