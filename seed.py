from app import db
from models import Image, Video

import os

def runSeed():
    db.drop_all()
    db.create_all()
    
    scanner_1_files = os.listdir('static/images/scanner_1_imgs')
    p_2020_files = os.listdir('static/images/photography_2020_imgs')
    p_2019_files = os.listdir('static/images/photography_2019_imgs')
    p_2018_files = os.listdir('static/images/photography_2018_imgs')
    p_2017_files = os.listdir('static/images/photography_2017_imgs')
    p_2016_files = os.listdir('static/images/photography_2016_imgs')
    music_video_files = os.listdir('static/videos/music_videos')
    water_video_files = os.listdir('static/videos/water_videos')
    beauty_virtue_video_files = os.listdir('static/videos/beauty_and_virtue_videos')
    
    music_video_headers = {}
    music_video_footers = {}
    water_video_headers = {}
    water_video_footers = {}
    beauty_virtue_video_headers = {}
    beauty_virtue_video_footers = {}
    
    
    music_video_headers['angel_pose_embed.txt'] = "Angel Pose MV"
    music_video_footers['angel_pose_embed.txt'] = "Video, Editing and Design by Nicholas Griffo"
    music_video_headers['pink_sunset.mp4'] = "Pink Sunset MV"
    music_video_footers['pink_sunset.mp4'] = "Video by Josh Thomas & Nicholas Griffo, Editing and Design by Nicholas Griffo"
    music_video_headers['stereo.mp4'] = "Stereo MV"
    music_video_footers['stereo.mp4'] = "Video, Editing and Design by Nicholas Griffo"
    
    for video in water_video_files:
        water_video_headers[video] = "Sample Header"
        water_video_footers[video] = "Sample Footer"
    
    for video in beauty_virtue_video_files:
        beauty_virtue_video_headers[video] = "Beauty & Virtue Public Access Channel 8 - NYC 8Ball TV"
        beauty_virtue_video_footers[video] = "http://8balltv.club/"
    
    Image.add_all_imgs(scanner_1_files, 'scanner_1_imgs')
    Image.add_all_imgs(p_2020_files, 'photography_2020_imgs')
    Image.add_all_imgs(p_2019_files, 'photography_2019_imgs')
    Image.add_all_imgs(p_2018_files, 'photography_2018_imgs')
    Image.add_all_imgs(p_2017_files, 'photography_2017_imgs')
    Image.add_all_imgs(p_2016_files, 'photography_2016_imgs')
    Video.add_all_vids(music_video_files, 'music_videos', music_video_headers, music_video_footers)
    Video.add_all_vids(water_video_files, 'water_videos', water_video_headers, water_video_footers)
    Video.add_all_vids(beauty_virtue_video_files, 'beauty_and_virtue_videos', beauty_virtue_video_headers, beauty_virtue_video_footers)
    
    db.session.commit()