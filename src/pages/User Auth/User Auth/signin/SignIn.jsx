import React from 'react';

export default function SignIn() {
    return (
        <body>
            <h2>Login with Google</h2>
            <button id="google-sign-in">Sign in with Google</button>
            <div id="user-info" style="display:none;">
                <p><strong>Name:</strong> <span id="user-name"></span></p>
                <p><strong>Email:</strong> <span id="user-email"></span></p>
                <p><strong>Profile Picture:</strong> <img id="user-photo" width="50" /></p>
                <button id="sign-out">Sign out</button>
            </div>

            <script>
                // Firebase configuration from your Firebase project
                const firebaseConfig = {
                    apiKey: "AIzaSyDpUdIPG08KB3LZYBKzQSr_3G_gSHVXA1s",
                    authDomain: "adhdassessment-fc1b8.firebaseapp.com",
                    projectId: "adhdassessment-fc1b8",
                    storageBucket: "adhdassessment-fc1b8.firebasestorage.app",
                    messagingSenderId: "1032763340794",
                    appId: "1:1032763340794:web:2b7def5d4d0df5b6889643"
                };

                // Initialize Firebase
                const app = firebase.initializeApp(firebaseConfig);
                const auth = firebase.auth();

                // Google provider
                const provider = new firebase.auth.GoogleAuthProvider();

                // DOM elements
                const signInButton = document.getElementById('google-sign-in');
                const signOutButton = document.getElementById('sign-out');
                const userInfoDiv = document.getElementById('user-info');
                const userNameSpan = document.getElementById('user-name');
                const userEmailSpan = document.getElementById('user-email');
                const userPhotoImg = document.getElementById('user-photo');

                // Google Sign-In
                signInButton.addEventListener('click', () => {
                    auth.signInWithPopup(provider)
                        .then((result) => {
                            const user = result.user;
                            displayUserInfo(user);
                        })
                        .catch((error) => {
                            console.error(error.message);
                        });
                });

                // Sign out
                signOutButton.addEventListener('click', () => {
                    auth.signOut()
                        .then(() => {
                            userInfoDiv.style.display = 'none';
                            signInButton.style.display = 'block';
                        })
                        .catch((error) => {
                            console.error(error.message);
                        });
                });

                // Listen to Auth State Change
                auth.onAuthStateChanged((user) => {
                    if (user) {
                        displayUserInfo(user);
                    } else {
                        userInfoDiv.style.display = 'none';
                        signInButton.style.display = 'block';
                    }
                });

                // Display user information after login
                function displayUserInfo(user) {
                    userInfoDiv.style.display = 'block';
                    signInButton.style.display = 'none';
                    userNameSpan.textContent = user.displayName;
                    userEmailSpan.textContent = user.email;
                    userPhotoImg.src = user.photoURL;
                }
            </script>
        </body>
    )
}

