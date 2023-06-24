import React, { useState } from 'react';

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Lakukan sesuatu dengan file yang dipilih
  };

  return (
    <div>
      <form mt="20px">
        <div>
          <label htmlFor="file">Profile Picture</label>
          <input
            type="file"
            id="file"
            h="29px"
            w="620px"
            color="#FF4C29"
            size="s"
            borderRadius="5px"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" mt="30px" h="30px" w="90px">
          Submit
        </button>
      </form>

      <form mt="20px">
        <div>
          <label>Username</label>
          <div>
            <input
              name="currentUsername"
              type="text"
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="Current username"
            />
            <input
              name="newUsername"
              type="text"
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="New username"
            />
            <button type="submit" mt="8px" h="35px" w="150px">
              Submit
            </button>
          </div>
        </div>
      </form>

      <form mt="20px">
        <div>
          <label>Email</label>
          <div>
            <input
              name="currentEmail"
              type="text"
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="Current email"
            />
            <input
              name="newEmail"
              type="text"
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="New email"
            />
            <button type="submit" mt="8px" h="35px" w="150px">
              Submit
            </button>
          </div>
        </div>
      </form>

      <form mt="20px">
        <div>
          <label>Phone number</label>
          <div>
            <input
              name="currentPhone"
              type="text"
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="Current phone number"
            />
            <input
              name="newPhone"
              type="text"
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="New phone number"
            />
            <button type="submit" mt="8px" h="35px" w="150px">
              Submit
            </button>
          </div>
        </div>
      </form>

      <form mt="20px">
        <div>
          <label>Password</label>
          <div>
            <input
              name="currentPassword"
              type={show ? 'text' : 'password'}
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="Current password"
            />
            <button onClick={handleClick} variant="none" mt="10px">
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
          <div>
            <input
              name="password"
              type={show ? 'text' : 'password'}
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="New password"
            />
            <button onClick={handleClick} variant="none" mt="10px">
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
          <div>
            <input
              name="confirmPassword"
              type={show ? 'text' : 'password'}
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="Confirm new password"
            />
            <button onClick={handleClick} variant="none" mt="10px">
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" mt="8px" h="35px" w="150px">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
