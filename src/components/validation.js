import validator from 'validator';

const validate = (firstName, lastName, title, nationality,
    skills, whySofterDeveloper, longTermVision,
    motivatesMe, favoriteQuote, joinedOn) => {
    const errors = {
        firstName: validator.isAlpha(firstName)
            ? ''
            : 'FirstName can only have alphabetic characters!!!',
        lastName: validator.isAlpha(lastName)
            ? ''
            : 'LastName can only have alphabetic characters!!!',
        title: validator.isAlpha(title)
            ? ''
            : 'title can only have alphabetic characters!!!',
        skills: validator.isEmpty(skills)
            ? 'Skills cannot be empty!!!'
            : '',
        whySofterDeveloper: validator.isEmpty(whySofterDeveloper)
            ? 'Please fill up this section!!'
            : '',
        favoriteQuote: validator.isEmpty(favoriteQuote)
            ? 'It cannot be empty!!!'
            : '',
        joinedOn: validator.isRFC3339(joinedOn)
            ? ''
            : 'Please ensure it is in date format',
    }
    return errors;
}

export default validate;

