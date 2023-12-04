# Curriculum Notes

Students must do all of the selection and manipulation from the **your-code.js**
file at the root of the project directory. 

When the cypress tests run, they pull the original html and css from the
**cypress/integration/original-index.html** file and the
**cypress/integration/original-site.css** files. This ensures that the tests are
not passing due to changes to the html or css starter code.

For any future revisions, make sure that any changes to the student-facing
**index.html** or **site.css** files are copied over to the files in the
**cypress/integration** directory so that they will be present for the
auto-grader.
