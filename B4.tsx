import React, { useState } from 'react';
function ProgressForm() {
  const [progress, setProgress] = useState<number>(0);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Tiến độ hoàn thành: ${progress}%`);
  };
  return (
    <div>
      <h2>Theo Dõi Tiến Độ</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tiến độ hoàn thành:
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={progress.toString()} 
            onChange={e => setProgress(parseInt(e.target.value, 10))} 
          />
          {progress}%
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default ProgressForm;