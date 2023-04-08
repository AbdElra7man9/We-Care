import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import React from 'react';

interface EmojiProps {
    setContent: (content: string) => void;
    content: string;
}

const Emoji: React.FC<EmojiProps> = ({ setContent, content }) => {
    return (
        <>
            <Picker
                data={data}
                previewPosition='none'
                theme='light'
                showSkinTones={true}
                showPreview={false}
                onEmojiSelect={(e: React.MouseEvent<HTMLButtonElement>) => setContent(content + e.native)}
            />
        </>
    );
};

export default Emoji;
