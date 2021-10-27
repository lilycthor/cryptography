// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const {phrase, shift} = req.body;
    const chars = phrase.split('');
    let newPhrase = '';
    for (const letter of chars) {
        if (letter === " ") {
            newPhrase += letter
        } else {
            const asciiValue = 97 + ((letter.charCodeAt()-97 + shift) % 26)
            const character = String.fromCharCode(asciiValue)
            newPhrase += character
        }
    }
    
    res.status(200).json({ phrase, shift, encodedResponse: newPhrase})
}