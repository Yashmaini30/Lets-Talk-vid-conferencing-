# Let's Talk

Let's Talk is a video conferencing application that supports multiple users simultaneously. It is optimized for the best performance using Peer-to-Peer (P2P) connections with Mesh SFU over TCP networking and WebRTC, along with socket support for linking. The application generates unique IDs using UUID and features a simple, functional UI.

## Features

- **Multiple Users**: Supports multiple participants in a single meeting.
- **Best Performance**: Optimized for P2P connections using Mesh SFU over TCP.
- **WebRTC Integration**: Utilizes WebRTC for real-time communication.
- **Socket Support**: Employs sockets for linking and communication.
- **UUID for IDs**: Generates unique IDs for sessions using UUID.
- **Simple UI**: Focused on functionality with a straightforward and easy-to-use interface.

    ```

## Usage

- Create a new meeting or join an existing one by entering a valid meeting ID.
- Share the meeting ID with other participants to join the session.
- Enjoy real-time video and audio communication with multiple users.

## Technologies Used

- **Frontend**: Next.js
- **Backend**: Node.js
- **Real-Time Communication**: WebRTC, Socket.io
- **Networking**: Mesh SFU over TCP
- **ID Generation**: UUID

## Contributing

We welcome contributions to enhance the features and improve the performance of Let's Talk. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m 'Add some feature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature/your-feature-name
    ```

5. Open a pull request.

## Acknowledgements

- Inspiration from Google Meet.
- Built using WebRTC, Socket.io, and UUID.

