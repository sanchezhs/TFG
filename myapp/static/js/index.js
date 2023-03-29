import AddRestriction from "./add-constraint.js";
import RemoveRestriction from "./remove-form.js";
import Form from "./form.js";
import Alert from "./alert.js";
import Label from "./label.js";

document.addEventListener('DOMContentLoaded', function () {
    const form = new Form();
    const alert = new Alert();
    const label = new Label();
    const removeRestriction = new RemoveRestriction(form, label);
    const addRestriction = new AddRestriction(form, removeRestriction, label);
});