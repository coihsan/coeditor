import { v4 as uuid } from 'uuid'
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs'

const startNote = {
    id: uuid(),
    content: '',
    created: dayjs().format(),
    lastUpdated: dayjs().format(),
    category: '',
    isTags: [],
    isPinned: false,
    isTrash: false,
    isFavorite: false,
    author: 'visitor'
}
