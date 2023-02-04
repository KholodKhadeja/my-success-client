import React from 'react';

const SignUpPage = () => {
    return (
        <div>
            <ul className="nav nav-tabs w-50" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
     role="tab" aria-controls="home-tab-pane" aria-selected="true">מורה</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" 
    role="tab" aria-controls="profile-tab-pane" aria-selected="false">תלמיד</button>
  </li>

</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    ...</div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    ...</div>
</div>
        </div>
    );
}

export default SignUpPage;
