import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ImageIcon from '@mui/icons-material/Image';

type InputCardProps = {
  blogData: {
    titleTop: string;
    bodyTop: string;
    titleSecond: string;
    bodySecond: string;
    titleThird: string;
    bodyThird: string;
    shopInfo: string;
    imageTop: File | null;
    imageSecond: File | null;
    imageThird: File | null;
  };
  handleTitleTopChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBodyTopChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleTitleSecondChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBodySecondChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleTitleThirdChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBodyThirdChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleshopInfoChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleImageTopChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageSecondChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageThirdChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  isPending: boolean;
};

const InputCard: React.FC<InputCardProps> = ({
  blogData,
  handleTitleTopChange,
  handleBodyTopChange,
  handleTitleSecondChange,
  handleBodySecondChange,
  handleTitleThirdChange,
  handleBodyThirdChange,
  handleshopInfoChange,
  handleImageTopChange,
  handleImageSecondChange,
  handleImageThirdChange,
  handleSubmit,
  isPending,
}) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <Card sx={{ backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center'}}>
      <CardContent>
          <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: '#4d4336', fontFamily: 'cursive', textDecoration: 'underline', marginBottom: '16px', textAlign: 'center' }}>
            Create Blog
          </Typography>
            <div>
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <label style={{ color: '#4d4336', fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'underline', flex: '1', textAlign: 'left', marginRight: '10px' }}>Title:</label>
                <input
                  type="text"
                  style={{
                    border: '4px solid #ffe9cc',
                    padding: '8px',
                    borderRadius: '4px',
                    flex: '5',
                    height: '40px',
                  }}
                  value={blogData.titleTop}
                  onChange={handleTitleTopChange}
                />
              </div>
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <label style={{ color: '#4d4336', fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'underline', flex: '1', textAlign: 'left', marginRight: '10px' }}>Body:</label>
                <textarea
                  value={blogData.bodyTop}
                  onChange={handleBodyTopChange}
                  style={{
                    border: '4px solid #ffe9cc',
                    padding: '8px',
                    borderRadius: '4px',
                    flex: '5',
                    height: '200px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ color: '#4d4336', fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'underline', flex: '1', textAlign: 'left', marginRight: '10px' }}>Shop Info:</label>
                <textarea
                  value={blogData.shopInfo}
                  onChange={handleshopInfoChange}
                  style={{
                    border: '4px solid #ffe9cc',
                    padding: '8px',
                    borderRadius: '4px',
                    flex: '5',
                    height: '100px',
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffe9cc',
                    color: '#4d4336',
                    fontWeight: 'bold',
                    padding: '10px',
                    margin: '5px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '330px',
                    fontFamily: 'cursive',
                  }}
                >
                  <ImageIcon />
                  <span style={{ marginLeft: '10px' }}>Image Top</span>
                  <input type="file" onChange={handleImageTopChange} style={{ display: 'none' }} />
                </label>
              </div>
              <div style={{ marginTop: '30px', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <label style={{ color: '#4d4336', fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'underline', flex: '1', textAlign: 'left', marginRight: '10px' }}>Title Second:</label>
                <input
                  type="text"
                  style={{
                    border: '4px solid #ffe9cc',
                    padding: '8px',
                    borderRadius: '4px',
                    flex: '5',
                    height: '40px',
                  }}
                  value={blogData.titleSecond}
                  onChange={handleTitleSecondChange}
                />
              </div>
              <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ color: '#4d4336', fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'underline', flex: '1', textAlign: 'left', marginRight: '10px' }}>Body Second:</label>
                <textarea
                  value={blogData.bodySecond}
                  onChange={handleBodySecondChange}
                  style={{
                    border: '4px solid #ffe9cc',
                    padding: '8px',
                    borderRadius: '4px',
                    flex: '5',
                    height: '100px',
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffe9cc',
                    color: '#4d4336',
                    fontWeight: 'bold',
                    padding: '10px',
                    margin: '5px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '330px',
                    fontFamily: 'cursive',
                  }}
                >
                  <ImageIcon />
                  <span style={{ marginLeft: '10px' }}>Image Second</span>
                  <input type="file" onChange={handleImageSecondChange} style={{ display: 'none' }} />
                </label>
              </div>
              <div style={{  marginTop: '30px', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <label style={{ color: '#4d4336', fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'underline', flex: '1', textAlign: 'left', marginRight: '10px' }}>Title Third:</label>
                <input
                  type="text"
                  style={{
                    border: '4px solid #ffe9cc',
                    padding: '8px',
                    borderRadius: '4px',
                    flex: '5',
                    height: '40px',
                  }}
                  value={blogData.titleThird}
                  onChange={handleTitleThirdChange}
                />
              </div>
              <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ color: '#4d4336', fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'underline', flex: '1', textAlign: 'left', marginRight: '10px' }}>Body Third:</label>
                <textarea
                  value={blogData.bodyThird}
                  onChange={handleBodyThirdChange}
                  style={{
                    border: '4px solid #ffe9cc',
                    padding: '8px',
                    borderRadius: '4px',
                    flex: '5',
                    height: '100px',
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffe9cc',
                    color: '#4d4336',
                    fontWeight: 'bold',
                    padding: '10px',
                    margin: '5px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '330px',
                    fontFamily: 'cursive',
                  }}
                >
                  <ImageIcon />
                  <span style={{ marginLeft: '10px' }}>Image Third</span>
                  <input type="file" onChange={handleImageThirdChange} style={{ display: 'none' }} />
                </label>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <button
                  onClick={handleSubmit}
                  disabled={isPending}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#4d4336',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    padding: '10px',
                    margin: '5px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '330px',
                    fontFamily: 'cursive',
                  }}
                >
                  {isPending ? 'Adding Blog' : 'Add Blog'}
                </button>
              </div>
            </div>
      </CardContent>
    </Card>
  );
}

export default InputCard;
