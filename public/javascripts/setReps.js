// JavaScript code to add rows to the setsAndReps table
document.addEventListener('DOMContentLoaded', function () {
    const setsAndRepsTable = document.getElementById('setsAndRepsTable');
    const addRowBtn = document.getElementById('addRowBtn');
  
    addRowBtn.addEventListener('click', function () {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td><input type="number" class="form-control" name="setsAndReps[]" min="0" max="5" value="0"></td>
        <td><input type="number" class="form-control" name="minReps[]" min="1" value="1"></td>
        <td><input type="number" class="form-control" name="maxReps[]" min="1" value="1"></td>
        <td><button type="button" class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
      `;
      setsAndRepsTable.querySelector('tbody').appendChild(newRow);
    });
  });
  
  // Function to remove a row
  function removeRow(button) {
    button.closest('tr').remove();
  }
  